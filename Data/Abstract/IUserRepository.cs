namespace PlanePort.Data.Abstract{

    public interface IUserRepository
    {
        bool IsEmailUnique(string email);
        bool IsUsernameUnique(string username);   
    }

}