using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ThoughTrace.ContactManager.Data.Model;

namespace ThoughTrace.ContactManager.Data
{
    public interface IGroupRepository
    {
        List<Group> GetGroups();
        Guid AddGroup(Group newGroup);
        void UpdateGroup(Guid id, Group gr);
        void RemoveGroup(Guid groupId);
        Group GetGroup(Guid groupId);

    }
}
