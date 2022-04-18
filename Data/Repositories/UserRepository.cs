using PlanePort.Models;
using PlanePort.Data.Abstract;

namespace PlanePort.Data.Repositories {
    public class UserRepository : EntityBaseRepository<User>, IUserRepository  {
        public UserRepository (PlanePortContext context) : base (context) 
        {   }

        public bool IsEmailUnique (string email) {
            var user = this.GetSingle(u => u.Email == email);
            return user == null;
        }

        public bool IsUsernameUnique (string username) {
            var user = this.GetSingle(u => u.Username == username);
            return user == null;
        }
    }
}