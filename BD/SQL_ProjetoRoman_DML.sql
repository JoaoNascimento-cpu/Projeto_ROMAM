--DML

--Usando O BD
use Projeto_Roman
Go

Insert into TipoUsuario(TipoUsuario)
values               ('professor');
Go

Insert into Usuario(IdTipoUsuario,email,senha,NomeUsuario)
values				(1,'saulo@gmail.com','123','Saulo'),
					(1,'Caique@gamil.com','123','CaiqueKirilo'),
					(1,'Thiago@gmail.com','123','nascimento'),
					(1,'Roberto@gmail.com','123','Possarle'),
					(1,'Paulo@gmail.com','123','PauloBrandão')            
Go




