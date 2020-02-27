const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

exports.consultasHomepage = async (req,res) => {

    const viajes = await Viaje.findAll({ limit: 3});
    const testimoniales = await Testimonial.findAll({ limit: 3});

    res.render('index',{
        clase: 'home',
        testimoniales,
        viajes
    });
}

/*exports.consultasHomepage = (req,res) => {
    const promises = [];

    promises.push(Viaje.findAll({
        limit: 3
    }));

    promises.push(Testimonial.findAll({
        limit: 3
    }));

    // pasar el promise y ejecutarlo
    const resultado = Promise.all(promises);

    resultado.then(resultado => res.render('index',{
        clase: 'home',
        viajes: resultado[0],
        testimoniales: resultado[1]
    }))
    .catch(error => console.log(error));
    //res.send('Hola mundo en nodeJS')
}*/