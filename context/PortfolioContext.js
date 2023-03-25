import { createContext, useEffect, useState } from "react";
import { client, urlFor, getFileUrl } from "../libs/sanityClient";
import moment from "moment";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [proyects, setProyect] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lenguage, setLenguage] = useState("es");
  const [repositories, setRepositories] = useState([]);
  const [information, setInformation] = useState(null);
  const [skills, setSkills] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchProyects();
    fetchRepositories();
    fetchInformation();
    fetchSkills();
    fetchTestimonials();
  }, []);

  const fetchRepositories = async () => {
    try {
      const res = await fetch(
        `https://api.github.com/users/ignacioedlp/repos?per_page=100`
      );
      const data = await res.json();

      setRepositories(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProyects = async () => {
    try {
      const res = await client.fetch(
        `*[_type == 'proyect' && author._ref == 'cfdf2496-5fb3-4cb5-92d6-8c2279e0a67b' && hide == false] {
            _id,
            title,
            description,
            image,
            url_proyect, 
            url_github,
            techs[]->{ title }
          } | order(_createdAt desc)`
      );

      res.forEach((proyect) => {
        let newItem = {
          titleEs: proyect.title,
          titleEn: proyect.title,
          description: proyect.description || "No description",
          image: urlFor(proyect.image).url() || "/",
          link: proyect.url_proyect || "/",
          link_github: proyect.url_github || "/",
          techs: proyect.techs,
        };

        setProyect((prevProyects) => [...prevProyects, newItem]);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchInformation = async () => {
    try {
      // const res = await fetch(
      //   `https://portfolio-cms-production.up.railway.app/api/informationUsers/63a76d2ca8ebee97cc9f2d26`
      // );

      const info = await client.fetch(
        `*[_type == 'resume' && _id == 'fada21bc-8c0a-405a-b32e-5c04d156baa0']{
          age,
          name,
          surname,
          phone,
          degrees,
          description,
          email,
          location,
          state,
          instagram, 
          github,
          linkedin,
          "cv_spanish": cv_spanish.asset->url,
          "cv_english": cv_english.asset->url,
          education[] | order(startDate asc)
        }`
      );

      setInformation({
        name: info[0].name,
        lastname: info[0].surname,
        email: info[0].email,
        phone: info[0].phone,
        degrees: info[0].degrees,
        address: info[0].address,
        location: info[0].location,
        description: info[0].description,
        state: info[0].state,
        education: info[0].education.map((item) => ({
          degree: item.degree,
          site: item.site,
          start: moment(item.startDate, 'YYYY-MM-dd').year(),
          end: moment(item.endDate, 'YYYY-MM-dd').year() || "Now",
          description: item.description,
        })),
        age: info[0].age,
        github: info[0].github,
        linkedin: info[0].linkedin,
        instagram: info[0].instagram,
        cv_spanish: info[0].cv_spanish,
        cv_english: info[0].cv_english,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSkills = async () => {
    try {
      // crea una query para traer las tech ordenador por category desc para sanity
      const query = `*[_type == "category" && !hidden]{
        _id,
        title,
        hidden,
        techs[]->{
          _id,
          title,
          logo
        }
      }`;

      const info = await client.fetch(query);

      for (const category of info) {
        for (let tech of category.techs) {
          tech.logo = urlFor(tech.logo).url();
        }
      }

      setSkills(info);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchTestimonials = async () => {
    try {
      const info = await client.fetch(
        `*[_type == 'testimonial' && author._ref == 'cfdf2496-5fb3-4cb5-92d6-8c2279e0a67b']{
          title,
          location,
          description
        }`
      );

      setTestimonials(info);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PortfolioContext.Provider
      value={{
        proyects,
        loading,
        lenguage,
        setLenguage,
        repositories,
        testimonials,
        information,
        skills,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
