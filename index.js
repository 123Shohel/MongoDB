const mongoDB = require('mongodb').MongoClient;
const url = "mongodb+srv://shohelDemo:sdBxupE1jTUHxxUM@cluster0.iwgwi.mongodb.net/shohelSchool?retryWrites=true&w=majority"
const config = { useUnifiedTopology: true }
mongoDB.connect(url,config,function(error,result){
    if(error){
        console.log("Connection fail")
    }
    else{
        console.log("Connection successs");
        // insertManyData(result)
        insertOneData(result)
    }
})

function insertManyData(result){
    const myDatabase = result.db("shohelSchool"); //connect my databse
    const myTableCollection = myDatabase.collection('cse'); // connect my database table

    const myData = [
        {
            Id:"011193002",
            Name:"Md. Shohel Mia",
            Batch:"53",
            Semester:"5th",
            City:"Kishoreganj"
        },
        {
            Id:"011193003",
            Name:"Tanmoy Mondol",
            Batch:"53",
            Semester:"5th",
            City:"Manikganj"
        },
        {
            Id:"011193004",
            Name:"Md. Arafat Hossain",
            Batch:"53",
            Semester:"5th",
            City:"Manikganj"
        },
        {
            Id:"011193005",
            Name:"Saiful Islam Babu",
            Batch:"53",
            Semester:"5th",
            City:"Barisal"
        },
        {
            Id:"011193007",
            Name:"Meheren Santara Proma",
            Batch:"53",
            Semester:"5th",
            City:"Narayangonj"
        },
        {
            Id:"011193009",
            Name:"Md.Mehedi Hassan Koushick",
            Batch:"53",
            Semester:"5th",
            City:"Barisal"
        },
        {
            Id:"011193013",
            Name:"Md.Mahbub Gulam Hassan",
            Batch:"53",
            Semester:"5th",
            City:"Dhaka"
        },
        {
            Id:"011193014",
            Name:"Md. Moshin",
            Batch:"53",
            Semester:"5th",
            City:"Kishoreganj"
        },
        {
            Id:"011193015",
            Name:"Tanjila",
            Batch:"53",
            Semester:"5th",
            City:"Monshiganj"
        },
    ]

    myTableCollection.insertMany(myData,function(err){
        if(err){
            console.log("Insert data fail")
        }
        else{
            console.log("Insert data success");
        }
    })

}

function insertOneData(result){
    const myDatabase = result.db("shohelSchool");
    const myTableCollection = myDatabase.collection('cse');
    const myOneData= {Id:"011193017",Name:"Md. Shahin Mia",Batch:"53",Semester:"5th",City:"Bajitpur"}

    myTableCollection.insertOne(myOneData, function(error){
        if(error){
            console.log("One data insert fail")
        }
        else{
            console.log("One data insert success");
        }
    })
}

function deleteOneData(result){
    
}