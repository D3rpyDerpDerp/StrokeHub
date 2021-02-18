import Posts_EN from "./Posts_EN";
import Posts_CN from "./Posts_CN";
import Posts_ML from "./Posts_ML";
import Posts_TA from "./Posts_TA";

export default Posts = [
    {
        language: "English",
        section: {
            title: "Home",
            body: Posts_EN
        } 
    },
    {
        language: "中文",
        section: {
            title: "主页",
            body: Posts_CN
        }
    },
    {
        language: "Bahasa Melayu",
        section: {
            title: "laman utama",
            body: Posts_ML
        }
    }, 
    {
        language: "தமிழ்",
        section: {
            title: "முகப்பு பக்கம்",
            body: Posts_TA
        }  
    },
];