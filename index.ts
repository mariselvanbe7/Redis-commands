

////import {createConnection, Repository} from "typeorm"
import { Console } from "console";
import { MyDataSource } from "./SRC/datsSOurce";
import { Students } from "./SRC/Entity/Student";

MyDataSource.initialize().then( ()  => console.log("connected")).then( async() => {

const studRepository = MyDataSource.getRepository(Students)

    console.log("Inserting a new record into the student database...");
    const stud = new Students();
    stud.name = "student5";
    stud.age = 12;
    stud.grade ="D"
 
  await  studRepository.save(stud);
 
  const result = await studRepository.find({})
  console.log(result);
  const results = await studRepository.findOne({where: {id: 1}})
  console.log(results);

  const resultsd = await studRepository.update( ([1,3,4,5]), { name: 'names' });
  const resulted = await studRepository.find({})
  console.log(resulted);
/*
  const sorted = await studRepository.find({
    
    order: {
      
        grade: "DESC" // "DESC"
    }
   
   
  })

  console.log(sorted);
*/
//pagination :
  const users = await MyDataSource.getRepository(Students)
    .createQueryBuilder("user")
    .orderBy("user.id")
    .take(10)
    .skip(10)
    .getMany()

    console.log(users)


    const userd = await MyDataSource.getRepository(Students).find({
      where: { id: 3},
      cache: true,
  })
  console.log(userd);
  })

.catch((err) => console.log(err));
    

//const users = studRepository.findOne({  });
//console.log(users)

