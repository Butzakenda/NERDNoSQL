// Categoria - Producto - Colaborador
db.Categoria.insert(
    [
        {
            "nombre":      "Bienes de consumo"   ,
            "descripcion": "Alimentos, joyas, libros, revistas, diarios"   ,
        },
        {
            "nombre":      "Servicios"   ,
            "descripcion": "Todos los servicios que clasifiquen como: Alimentación, Transporte, Limpieza doméstica, Telecomunicaciones, Interpretación y traducción, Editoriales, reparación, Educativos, médicos y distribución. "   ,
        },
        {
            "nombre":      "Bienes de uso común"   ,
            "descripcion": "Ropa."   ,
        },
        {
            "nombre":      "Bienes de emergencia"   ,
            "descripcion": "Extintores, EPP, Equipo de seguridad."   ,
        },
        {
            "nombre":      "Bienes durables"   ,
            "descripcion": "Todo tipo de artículos de segunda o primera mano que tengan una larga vida de uso, tales como: Electrodomésticos, Instrumentos, Juguetes, entre otros."   ,
        },
        {
            "nombre":      "Bienes de especialidad (no de tecnología militar)"   ,
            "descripcion": "Medicamentos naturales y no naturales."   ,
        },
        {
            "nombre":      "Bienes de inmueble"   ,
            "descripcion": "Departamentos, oficinas y casas."   ,
        },
        {
            "nombre":      "Bienes muebles"   ,
            "descripcion": "Computadores, Celulares, Videojuegos, Muebles, Alcohol, Cigarrillos, Vehículos, "   ,
        },
    ]
);
db.Producto.insert(
    [
        {
            "inscribirproducto":new Date("2023/01/01 14:32:35"),
            "departamento":"Boyacá",
            "ciudad":"Tunja",
            "categoria":"Servicios",
            "colaborador":"JuanAlvarez1002405677",
            "nombre":"Platos a la carta",
            "precio":"12000",
            "descripcion":"Deliciosos platos a la carta y corrientes",
            
        },  
        {
            "inscribirproducto": new Date("2023/01/13 15:19:01"),
            "departamento":"Antioquia",
            "ciudad":"Bello",
            "categoria":"Servicios",
            "colaborador":"JuanAndrade1002615674",
            "nombre":"Servicio de internet de fibra Optica",
            "precio":"59900",
            "descripcion":"Internet de fibra Optica",
        },
        {
            "inscribirproducto": new Date("2023/01/13 8:03:06"),
            "departamento":"Boyacá",
            "ciudad":"Sogamoso",
            "categoria":"Bienes de uso común",
            "colaborador":"JuanBenitez1002713634",
            "nombre":"Jean Skinny Koaj",
            "precio":"65000",
            "descripcion":"Ropa.",
        },
        {
            "inscribirproducto": new Date("2023/01/15 11:34:09"),
            "departamento":"Meta",
            "ciudad":"Villaviciencio",
            "categoria":"Bienes de emergencia",
            "colaborador":"MiguelCastillo1002873674",
            "nombre":"Extintores con descuento en recarga",
            "precio":"35000",
            "descripcion":"Implementos de seguridad",
        },
        {
            "inscribirproducto": new Date("2023/01/17 14:00:16"),
            "departamento":"Antioquia",
            "ciudad":"Envigado",
            "categoria":"Bienes durables",
            "colaborador":"JuanCastro1002963673",
            "nombre":"Lavavajillas de segunda en perfecto estado",
            "precio":"135000",
            "descripcion":"Lavavajillas...",
        },
        {
            "inscribirproducto": new Date("2023/01/19 14:05:19"),
            "departamento":"Antioquia",
            "ciudad":"Marinilla",
            "categoria":"Bienes durables",
            "colaborador":"JuanContreras1002128673",
            "nombre":"Guitarra Acustica casi nueva",
            "precio":"459000",
            "descripcion":"Instrumentos musicales",
        },
        {
            "inscribirproducto": new Date("2023/01/19 15:06:56"),
            "departamento":"Antioquia",
            "ciudad":"Barbosa",
            "categoria":"Bienes durables",
            "colaborador":"DiegoDeLeon1002240672",
            "nombre":"Unguento",
            "precio":"50000",
            "descripcion":"Medicina",
        },
        {
            "inscribirproducto": new Date("2023/01/20 17:48:14"),
            "departamento":"Antioquia",
            "ciudad":"Medellin",
            "categoria":"Bienes durables",
            "colaborador":"JuanDiaz1072320361",
            "nombre":"Acer Ryzen 05",
            "precio":"600000",
            "descripcion":"Tecnologia",
        },
        {
            "inscribirproducto": new Date("2023/01/20 17:00:16"),
            "departamento":"Boyacá",
            "ciudad":"Duitama",
            "categoria":"Bienes de inmueble",
            "colaborador":"JuanGonzales1013380362",
            "nombre":"Oficina",
            "precio":"750000",
            "descripcion":"Oficina 2do piso",
        },
    ]
);
db.Colaborador.insert(
    [
        {
            "departamento":"Boyacá",
            "ciudad":"Tunja",
            "documento":"1002615674",
            "nombres":"Juan Pablo",
            "apellidos":"Alvarez Duarte",
            "correoelectronico":"Alvdu123@gmail.com",
            "telefono":"3100028965",
            "fechanacimiento":new Date("2001/03/14")
        },
        {
            "departamento":"Antioquia",
            "ciudad":"Bello",
            "documento":"1002713634",
            "nombres":"Juan Jose",
            "apellidos":"Andrade Espinoza",
            "correoelectronico":"Andes456@gmail.com",
            "telefono":"3131002365",
            "fechanacimiento":new Date("1998/11/14"),
        },
        {
            "departamento":"Boyacá",
            "ciudad":"Sogamoso",
            "documento":"1002963673",
            "nombres":"Juan Diego",
            "apellidos":"BenItez Fernandez",
            "correoelectronico":"Benfer789@gmail.com",
            "telefono":"3121236547",
            "fechanacimiento":new Date("1999/10/14"),
        },
        {
            "departamento":"Meta",
            "ciudad":"Villavicencio",
            "documento":"1002873674",
            "nombres":"Miguel Angel",
            "apellidos":"Castillo Flores",
            "correoelectronico":"Casflo321@gmail.com",
            "telefono":"3151250789",
            "fechanacimiento":new Date("1989/09/11"),
        },
        {
            "departamento":"Antioquia",
            "ciudad":"Envigado",
            "documento":"1002128673",
            "nombres":"Juan Sebastian",
            "apellidos":"Castro Garcia",
            "correoelectronico":"Casgar654@gmail.com",
            "telefono":"3182569874",
            "fechanacimiento":new Date("1975/07/30"),
        },
        {
            "departamento":"Antioquia",
            "ciudad":"Marinilla",
            "documento":"1002240672",
            "nombres":"Juan David",
            "apellidos":"Contreras Gimenez",
            "correoelectronico":"Congim987@gmail.com",
            "telefono":"3199874125",
            "fechanacimiento":new Date("1973/05/19"),
        },
        {
            "departamento":"Antioquia",
            "ciudad":"Barbosa",
            "documento":"1072320361",
            "nombres":"",
            "apellidos":"",
            "correoelectronico":"",
            "telefono":"",
            "fechanacimiento":new Date("1975/06/16"),
        },
        {
            "departamento":"Boyacá",
            "ciudad":"Duitama",
            "documento":"1013380362",
            "nombres":"Diego Alejandro",
            "apellidos":"De Leonn Gomez",
            "correoelectronico":"Delgom147@gmail.com",
            "telefono":"3223216547",
            "fechanacimiento":new Date("1998/01/15"),
        },
        {
            "departamento":"Bogotá ",
            "ciudad":"Bogotá",
            "documento":"1025350363",
            "nombres":"Juan Manuel",
            "apellidos":"Diaz Andrade",
            "correoelectronico":"Diagon258@gmail.com",
            "telefono":"3231234567",
            "fechanacimiento":new Date("2000/02/13"),
        },
        {
            "departamento":"Bogotá ",
            "ciudad":"Duitama",
            "documento":"1037360264",
            "nombres":"Juan David",
            "apellidos":"Gonzales Benitez",
            "correoelectronico":"Gonben753@gmail.com",
            "telefono":"3171897867",
            "fechanacimiento":new Date("2000/05/06"),
        },
    ]
);

//Consultas

// NERD - Categoria
//1
db.Categoria.find().pretty();
//2
db.Categoria.find({},{nombre:1, _id:0}).pretty();
//3
db.Categoria.find({}).count();
//4
db.Categoria.find({}, {servicios:0 ,_id:0}).pretty();
//5
db.Categoria.find({},{_id:0}).sort({nombre:1}).pretty();


// NERD - Colaborador
//1
db.Colaborador.find({}).pretty();
//2
db.Colaborador.find({},{nombres:1, documento:1, telefono:1, _id:0});
//3
db.Colaborador.find({}).count();
//4
db.Colaborador.find({fechanacimiento: {$gte : ISODate("2000-01-01")}}).pretty();
//5
db.Colaborador.find({}, {apellidos:1, nombres:1, documento:1, fechanacimiento:1, _id:0}).sort({apellidos:-1}).pretty();


// NERD - Producto
//1
db.Producto.find({}).pretty();
//2
db.Producto.find({},{nombre:1, precio:1, descripcion:1, _id:0}).pretty();
//3
db.Producto.find({}).count();
//4
db.Producto.find({precio: {$gt : 200000}}).pretty();
//5
db.Producto.find({departamento: "Boyacá"}).pretty();


//Actualizaciones

// NERD - Categoria
//1
db.Categoria.update({nombre:"Servicios"},{$set : {nombre:"Servicios y mano de obra"}});
//2
db.Categoria.update({nombre:"Bienes de uso común"},{$set: {descripcion:"Ropa, calzado, accesorios y joyas."}});

// NERD - Colaborador
//1
db.Colaborador.update({documento:"1037360264"},{$set: {fechanacimiento: new Date("1999-05-06")}});
//2
db.Colaborador.updateMany({documento:"1037360264"}, {$set: {telefono: "322789569", Ciudad: "Tunja"}});

// NERD - Producto
//1
db.Producto.update({},{$inc: {precio:5200}}, {multi:true});
//2
db.Producto.update({$expr: {$and: [{$gte: [{$year: "$inscribirproducto"} , {$year: new Date ()}]}]}} , {$inc: {precio:2500}}, {multi:true});
