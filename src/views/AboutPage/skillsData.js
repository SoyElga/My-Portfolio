import DatabaseLogo from './assets/skills/database.svg';
import PythonLogo from './assets/skills/python.svg';
import WDLogo from './assets/skills/WD.png';
import JavaLogo from './assets/skills/Java.png';
import DjangoLogo from './assets/skills/django.png';
import ExcelLogo from './assets/skills/excel.png';
import TableauLogo from './assets/skills/tableau.png';
import PowerBILogo from './assets/skills/powerBI.png'
import AWSLogo from './assets/skills/aws.png'
import SparkLogo from './assets/skills/spark.png'
import NetLogo from './assets/skills/net.png'

const personal_skills = {
    SQL: {
        title: "SQL",
        description: "MySQL, SQLServer, SQLite",
        img: DatabaseLogo
    },

    NoSQL: {
        title: "NoSQL",
        description: "MongoDB, DynamoDB",
        img: DatabaseLogo
    },
    
    Python: {
        title: "Python",
        description: "Pandas, Numpy, Scikit Learn, Keras, Jupyther, Matplotlib, Seaborn",
        img: PythonLogo
    },

    WebDev: {
        title: "HTML, CSS, JS",
        description: "React, NodeJS",
        img: WDLogo
    },

    Java: {
        title: "Java",
        description: null,
        img: JavaLogo
    },

    PythonWebDev: {
        title: "Python Web Dev",
        description: "Flask, Django, FastAPI, Streamlit",
        img: DjangoLogo
    },

    Excel: {
        title: "Microsoft Excel",
        description: null,
        img: ExcelLogo
    },

    Tableau: {
        title: "Tableau",
        description: null,
        img: TableauLogo
    },

    PowerBI: {
        title: "PowerBI",
        description: null,
        img: PowerBILogo
    },
    
    AWS: {
        title: "Amazon Web Services",
        description: null,
        img: AWSLogo
    },

    Spark: {
        title: "Spark",
        description: "PySpark",
        img: SparkLogo
    },

    ASP : {
        title: ".NET",
        description: "ASPX, Visual Basic, C#",
        img: NetLogo
    }

}

export default personal_skills;