import CheckBox from "./CheckBox";
import FormsTitle from "./FormsTitle";
import Observations from "./Observations";
import RadioCheck from "./RadioCheck";

function HealthForm() {
  return (
    <>
      <form className="w-full p-5 ">
        <FormsTitle principal="antecedentes" />
        <div className="py-10 gap-5 grid grid-cols-4 w-full">
          <RadioCheck question="¿Está bajo tratamiento medico?" />
          <RadioCheck question="¿Está embarazada?" />
          <div className="col-start-3 col-span-2">
            <Observations />
          </div>
          <RadioCheck question="¿Consume algún medicamento?" />
          <RadioCheck question="¿Presenta alguna alergia?" />
          <div className="col-start-3 col-span-2">
            <Observations />
          </div>
        </div>{" "}
        <FormsTitle principal="antecedentes familiares" />
        <div className="py-10 gap-8 w-full grid grid-cols-4">
          <CheckBox titulo="cancér" />
          <CheckBox titulo="enfermedad cardiovascular" />
          <CheckBox titulo="enfermedades hemorragicas" />
          <CheckBox titulo="enfermedades dermatologicas" />
          <CheckBox titulo="artiritis" />
          <CheckBox titulo="hipertension" />
          <div className="col-start-1 col-span-4">
            <Observations />
          </div>
        </div>
        <FormsTitle principal="antecedentes patologicos" />
        <div className="py-10 gap-8 w-full grid grid-cols-4">
          <CheckBox titulo="hipertensión" />
          <CheckBox titulo="diabetes" />
          <CheckBox titulo="cardiopatias" />
          <CheckBox titulo="enfermedades dermatologicas" />
          <CheckBox titulo="enferemedades respiratorias" />
          <CheckBox titulo="enfermedades gastrointestinales" />
          <CheckBox titulo="enfermedad endocrina" />
          <CheckBox titulo="hemofilia" />
          <CheckBox titulo="micosis" />
          <CheckBox titulo="insuficiencia renal" />
          <CheckBox titulo="cancer" />
          <CheckBox titulo="anemia" />
          <CheckBox titulo="fiebre reumatica" />
          <CheckBox titulo="úlcera gastrica" />
          <CheckBox titulo="transtornos mentales" />
          <CheckBox titulo="patologia psiquiatrica" />
          <CheckBox titulo="artritis" />
          <CheckBox titulo="enfermedades venereas" />
          <CheckBox titulo="fracturas" />
          <CheckBox titulo="protesis corporal" />
          <CheckBox titulo="osteoporosis" />
          <CheckBox titulo="hepatitis" />
          <CheckBox titulo="epilepsia" />
          <CheckBox titulo="asma" />
          <CheckBox titulo="gastritis" />
          <CheckBox titulo="ulcera" />
          <CheckBox titulo="vih" />
          <CheckBox titulo="inmunodeficiencias" />
          <CheckBox titulo="otro" />
          <div className="col-start-1 col-span-4">
            <Observations />
          </div>
        </div>
        <FormsTitle principal="habitos" />
        <div className="py-10 gap-8 w-full grid grid-cols-4">
          <CheckBox titulo="Fuma" />
          <CheckBox titulo="Bebidas Alcohólicas" />
          <CheckBox titulo="Come Uñas" />
          <CheckBox titulo="Sustancias Psicotropicas" />
          <CheckBox titulo="Hospitalizaciones" />
          <div className="col-start-1 col-span-4">
            <Observations />
          </div>
        </div>{" "}
      </form>
    </>
  );
}

export default HealthForm;
