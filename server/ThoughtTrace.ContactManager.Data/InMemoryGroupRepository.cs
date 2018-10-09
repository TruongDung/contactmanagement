using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ThoughTrace.ContactManager.Data.Model;

namespace ThoughTrace.ContactManager.Data
{
    public class InMemoryGroupRepository : IGroupRepository
    {
        private readonly ConcurrentDictionary<Guid, Group> _groups;

        public InMemoryGroupRepository(ConcurrentDictionary<Guid, Group> groups)
        {
            _groups = groups;
        }

        public Guid AddGroup(Group newGroup)
        {
            newGroup.Id = Guid.NewGuid();
            var added = _groups.TryAdd(newGroup.Id, newGroup);
            if (!added) throw new Exception("Failed to add group");

            return newGroup.Id;
        }

        public List<Group> GetGroups()
        {
            return this._groups.Values.OrderBy(x => x.Name).ToList();
        }

        public Group GetGroup(Guid id)
        {
            _groups.TryGetValue(id, out var retrievedGroup);
            return retrievedGroup;
        }

        public void UpdateGroup(Guid id, Group gr)
        {
            var Group = GetGroup(id);
            if (Group == null) throw new ArgumentException($"Contact does not exist: {id.ToString()}", nameof(id));

            gr.Id = id;
            _groups.AddOrUpdate(id, gr, (key, oldValue) => gr);
        }

        public void RemoveGroup(Guid groupId)
        {
            _groups.TryRemove(groupId, out var removedGroup);
        }

    }
}
