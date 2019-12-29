import { Injectable } from '@angular/core';

//Definir interface para los datos
export interface Personaje{
    nombre: string;
    bio: string;
    img: string;
    region: string;
}

@Injectable()
export class PersonajesService {

    private personajes:Personaje[] = [
        {
          nombre: "Jax",
          bio: "Inigualable tanto en sus habilidades de armamentos únicos como en su mordaz sarcasmo, Jax es el último maestro de armas conocido de Icathia. Después de que su tierra natal fue destruida por su propia arrogancia al desencadenar el Vacío, Jax y su especie juraron proteger lo poco que quedó. Mientras la magia aumenta en el mundo, la amenaza durmiente se agita una vez más, y Jax vaga por Valoran, portando la última luz de Icathia y poniendo a prueba a todos los guerreros que conoce para ver si son suficientemente fuertes para erguirse a su lado...",
          img: "assets/img/jax.jpg",
          region:"RUNATERRA"
        },
        {
          nombre: "bardo",
          bio: "El Bardo es un viajero de un reino más allá de las estrellas y un agente de la serendipia quien lucha por conservar el balance donde sea que la vida resista la indiferencia del caos. Muchas canciones de Runaterra hablan sobre su extraordinaria naturaleza y todas ellas dicen que los artefactos de un inmenso poder mágico atraen al vagabundo cósmico. Rodeado por un alegre coro de espíritus de meeps, es imposible pensar que sus acciones son malévolas, ya que el Bardo siempre busca servir al bien de todos... a su extraña manera.",
          img: "assets/img/bardo.jpg",
          region:"RUNATERRA"
        },
        {
          nombre: "jinx",
          bio: "Jinx, una maniática e impulsiva criminal de Zaun, vive para sembrar el caos sin pararse a pensar en las consecuencias, Con un arsenal de juguetes letales a su disposición, desata las explosiones más brillantes y los estallidos más ruidosos para dejar un rastro de caos y pánico a su paso. Jinx detesta el aburrimiento y con una gran alegría deja su marca de pandemonio a dondequiera que vaya.",
          img: "assets/img/jinx.jpg",
          region:"ZAUN"
        },
        {
          nombre: "Senna",
          bio: "Condenada desde la infancia a ser acechada por la sobrenatural Niebla Negra, Senna se unió a una orden sagrada conocida como los Centinelas de la Luz y luchó salvajemente contra ella. No obstante, el cruel espectro Thresh la asesinó y encerró su alma en una linterna. Senna se rehusó a perder la esperanza y, dentro de la linterna, aprendió a usar la Niebla; tras ello, reemergió en una nueva vida, cambiada para siempre. Ahora, cada disparo de su arma reliquia combina la oscuridad y la luz. Con ella, Senna busca acabar con Niebla Negra al ponerla en su propia contra y así redimir a las almas perdidas que lleva dentro.",
          img: "assets/img/senna.jpg",
          region:"RUNATERRA"
        },
        {
          nombre: "Thresh",
          bio: "Sádico y astuto, Thresh es un espíritu ambicioso e incansable de las Islas de la Sombra. Otrora el custodio de incontables secretos arcanos, fue consumido por un poder mayor a la vida o la muerte. Ahora, se alimenta del tormento y quebranta a otros con sus lentas e insoportables torturas. Sus víctimas sufren más allá de su breve transición desde el mundo mortal cuando Thresh inflige agonía en sus almas y las aprisiona en su linterna maldita para torturarlas por toda la eternidad.",
          img: "assets/img/tresh.jpg",
          region: "ISLAS DE LAS SOMBRAS"
        },
        {
          nombre: "Twisted Fate",
          bio: "Twisted Fate es un afamado experto en juegos de cartas y estafador. Ha apostado y usado su encanto en gran parte del mundo conocido, lo que le ha hecho ganarse el odio y la admiración de ricos y tontos por igual. Rara vez se toma las cosas en serio, despierta cada día con una burlesca sonrisa y un descuidado aire de fanfarrón. Por donde se vea, Twisted Fate siempre tiene un as bajo la manga.",
          img: "assets/img/tw.jpg",
          region: "AGUASTURBIAS"
        },
        {
          nombre: "VI",
          bio: "Otrora una criminal de las calles salvajes de Zaun, Vi es una mujer impulsiva e imponente con un laxo respeto hacia las autoridades. Vi creció completamente sola, por lo que desarrolló instintos de supervivencia finamente pulidos, así como un retorcido sentido del humor. Ahora, trabaja con los Protectores para mantener la paz en Piltóver; utiliza unos poderosos guanteletes hextech que atraviesan muros y golpean sospechosos con la misma facilidad.",
          img: "assets/img/vi.jpg",
          region: "PILTOVER"
        },
        {
          nombre: "ZED",
          bio: "Implacable y despiadado, Zed es el líder de la Orden de la Sombra, una organización que él creó con la intención de militarizar las tradiciones de artes marciales y mágicas de Jonia para repeler a los invasores noxianos. Durante la guerra, la desesperación lo llevó a revelar la forma secreta de las sombras, una malévola magia espiritual tan poderosa como corrupta y peligrosa. Zed dominó todas esas técnicas prohibidas para destruir a cualquier amenaza para su nación o su nueva orden.",
          img: "assets/img/zed.jpg",
          region: "JONIA"
        }
      ];

    constructor(){
        console.log("Servicio listo para usar!!");
        
    }

    //Obtener la información de los personajes
    getPersonajes():Personaje[]{
        return this.personajes;
    }

    getPersonaje(index: string){
      return this.personajes[index];
    }

    buscarPersonajes( termino:string):Personaje[]{
      
      let personajesArr:Personaje[] = [];
      termino = termino.toLowerCase();

      for(let personaje of this.personajes){
        
        let nombre = personaje.nombre.toLowerCase();//nombre del personaje

        if (nombre.indexOf(termino) >= 0) {//index of: buscar string dentro de nombre
          personajesArr.push(personaje)
        }
      }

      return personajesArr;
    }
}