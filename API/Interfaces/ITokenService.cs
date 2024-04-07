using API.Entities;

namespace API.Interfaces{
    public interface ITokenService{
        string SCreateToken(ForStudent forStudent);
        string WCreateToken(ForWardan forWardan);
    }
}