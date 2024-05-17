import Conf1 from '../assets/images/conf1.png'
import Conf2 from '../assets/images/conf2.png'
import Conf3 from '../assets/images/conf3.png'
import Conf4 from '../assets/images/conf4.png'
import Conf5 from '../assets/images/conf5.png'
import Conf6 from '../assets/images/conf6.png'
import Conf7 from '../assets/images/conf7.png'
import Conf8 from '../assets/images/conf8.png'

import Esti from '../assets/images/esti.png'
import Etech from '../assets/images/etech.png'
import Gdsc from '../assets/images/gdsc.png'
import MadaLinux from '../assets/images/madalinux.png'
import Axian from '../assets/images/axian.png'

import MobLine from "../assets/images/mobileLine.png"
export const conferenceImage=[
    {
        id:1,
        image:Conf1,
        content:"Linux as a Tool for Global Education",
        hours:"9h-9h45"
    },
    {
        id:2,
        image:Conf2,
        content:"Women in Linux",
        hours:"9h50-10h35"
    },
    {
        id:3,
        image:Conf3,
        content:"Open-Source Software in Government",
        hours:"10h40-11h25"
    },
    {
        id:4,
        image:Conf4,
        content:"Linux for Entrepreneurs",
        hours:"11h30-12h15"
    },
    {
        id:5,
        image:Conf5,
        content:"Privacy and Security in the Open Source World",
        hours:"13h-13h45"
    },
    {
        id:6,
        image:Conf6,
        content:"Linux in the Arts",
        hours:"13h50-14h35"
    },
    {
        id:7,
        image:Conf7,
        content:"From Zero to Hero",
        hours:"14h40-15h25"
    },
    {
        id:8,
        image:Conf8,
        content:"Community Building with Linux",
        hours:"15h30-16h15"

    },

]

export const stand=[
    {
        id:1,
        number:"01",
        image:Esti
    },
    {
        id:2,
        number:"02",
        image:Etech
    },
    {
        id:3,
        number:"03",
        image:Axian
    },
    {
        id:4,
        number:"04",
        image:MadaLinux
    },
    {
        id:5,
        number:"05",
        image:Esti
    },
    {
        id:6,
        number:"06",
        image:Gdsc
    },
]

export const statistique =[
    {
        id:1,
        number:"350",
        text:"Participants"
    },
    {
        id:2,
        number:"8",
        text:"Thématiques développées"
    },
    {
        id:3,
        number:"6",
        text:"Stands avec des projets incroyables"
    },
    {
        id:4,
        number:"5",
        text:"Merveilleurs sponsor"
    },
]
export const comptetionList=[
    {
        id:1,
        content:"Meme challenge",
        event:"Facebook",
        line:MobLine,
        about:"Challenge des meilleurs memes relié à l'IT."
    },
    {
        id:2,
        content:"Chasse au trésor",
        event:"En présentiel",
        line:MobLine,
        about:"Une compétition de scripting."
    },
    {
        id:3,
        content:"Why Not My Desktop",
        event:"En présentiel",
        line:MobLine,
        about:"Élection de celui qui a le meilleur DE."
    },
]
export * from "./organizers";
export * from "./partners";