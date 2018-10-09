using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System;
using System.Collections.Generic;
using System.Web.Http;
using ThoughTrace.ContactManager.Data;
using ThoughTrace.ContactManager.Data.Model;

namespace ThoughtTrace.ContactManager.WebApi.Controllers
{
    public class GroupController : ApiController
    {
        private readonly IGroupRepository _groupRepository;

        public GroupController(IGroupRepository groupRepository)
        {
            this._groupRepository = groupRepository;
        }

        public IEnumerable<Group> Get()
        {
            return _groupRepository.GetGroups();
        }

        public IHttpActionResult Get(Guid id)
        {
            return null;
        }

        public IHttpActionResult Post([FromBody]Group value)
        {
            var newGroupId = _groupRepository.AddGroup(value);
            return Ok(newGroupId);
        }

        public IHttpActionResult Put(Guid id, [FromBody]Group value)
        {
            _groupRepository.UpdateGroup(id, value);
            return Ok();
        }

        public IHttpActionResult Delete(Guid id)
        {
            _groupRepository.RemoveGroup(id);
            return Ok();
        }
    }
}