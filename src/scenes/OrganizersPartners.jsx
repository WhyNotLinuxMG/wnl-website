import { organizers, partners } from "../utils/";
import Title from "../components/organizersPartners/Title";
import Associates from "../components/organizersPartners/Associates";
import Associate from "../components/organizersPartners/Associate";

//ORGANISATEURS ET PARTENAIRES
function OrganizersPartners() {
  return (
    <section className=" bg-background py-[7.5rem] lg:px-20 font-DMMono" id='section2'>
      {/* SEPARATOR */}
      <div className=" mx-auto md:h-3 h-2 mb-16 box-border border-dashed border-y-2 opacity-10 text-raven "></div>
      {/*ORGANISATEURS*/}
      <div className="m-auto pb-20">
        <Title>
          Organisa<span className="text-yellow">teurs</span>{" "}
        </Title>
        <Associates>
          {organizers &&
            organizers.map((organizer, index) => {
              return <Associate key={index} associate={organizer} />;
            })}
        </Associates>
      </div>
      {/* SEPARATORS */}
      <div className=" mx-auto md:h-3 h-2 mb-16 box-border border-dashed border-y-2 opacity-10 text-raven "></div>
      {/*PARTENAIRES*/}
      <div className="mx-auto">
        <Title>
          Nos <span className="text-yellow">Partenaires</span>{" "}
        </Title>
        <Associates>
          {partners &&
            partners.map((partner, index) => {
              return <Associate key={index} associate={partner} />;
            })}
        </Associates>
      </div>
    </section>
  );
}

export default OrganizersPartners;
