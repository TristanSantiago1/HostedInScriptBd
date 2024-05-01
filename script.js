
db.createCollection("Users");
db.createCollection("lodgings");
db.createCollection("lodgingsTypes");
db.createCollection("Publications");

var usuarios = [
    {
        _id : 1,
        fullName : "Eduardo Garcia Diaz",
        birth : new Date("2003-01-15T12:00:00Z"),
        phone : 2281904567,
        email : "eduardo@gmail.com",
        password : "eduardoSeguro",
        ocupation : "ingeniero",
        home : "Xalapa",
    },
    {
        _id : 2,
        fullName : "Daniel Garcia Arcos",
        birth : new Date("2003-03-15T12:00:00Z"),
        phone : 2281504567,
        email : "daniel@gmail.com",
        password : "danielSeguro",
        ocupation : "ingeniero",
        home : "Xalapa",
    },
    {
        _id : 3,
        fullName : "Tristan Eduardo Suarez Snatiago",
        birth : new Date("2003-03-15T12:00:00Z"),
        phone : 2281504567,
        email : "tristan@gmail.com",
        password : "trisSeguro",
        ocupation : "ingeniero",
        home : "Xalapa",
    },
];

db.Users.insertMany(usuarios);

var tiposAlojamientos = [
    { _id: 1, name: "Casa" }
];

db.lodgingsTypes.insertMany(tiposAlojamientos);

var alojamientos = [
    {
        _id : 1,
        nigthPrize : 200,
        residentsNum : 3,
        roomNum : 4,
        bedNum : 4,
        bathNum : 4,
        rules : "No fumar",
        typeLog : 1,
        latitud : 113.222,
        longitud : 2223.442222,
    }, 
    {
        _id : 2,
        nigthPrize : 200,
        residentsNum : 3,
        roomNum : 4,
        bedNum : 4,
        bathNum : 4,
        rules : "No Tomar",
        typeLog : 1,
        latitud : 113.222,
        longitud : 2223.442222,
    },
    {
        _id : 3,
        nigthPrize : 200,
        residentsNum : 3,
        roomNum :4,
        bedNum : 4,
        bathNum : 4,
        rules : "No fumar",
        idlodgingsType : 1,
        latitud : 113.222,
        longitud : 2223.442222,
    }
];


db.lodgings.insertMany(alojamientos);

var publicaciones = [
    {
        _id : 1,
        titulo : "Publicacion Eduardo",
        descripcion : "Lujosa casa",
        idLodging : 1,
        owner : "Eduardo Garcia Diaz",
    },
    {
        _id : 2,
        titulo : "Publicacion Daniel",
        descripcion : "Casa de campo",
        idLodging : 2,
        owner : "Daniel Garcia Arcos",
    },
    {
        _id : 3,
        titulo : "Publicacion Tris",
        descripcion : "Hotel ",
        idLodging : 3,
        owner : "Tristan Eduardo Suarez Snatiago",
    },
];


db.Publications.insertMany(publicaciones);