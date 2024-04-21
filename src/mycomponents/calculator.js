import React, {useState} from "react";

const PopupForm = () => {
  const [area, setArea] = useState(110);
  const [propertyType, setPropertyType] = useState('');
  const [needDesignProject, setNeedDesignProject] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
    console.log({
      area,
      propertyType,
      needDesignProject,
      phoneNumber
    });
   
  };

  return (
    <div className="loan-calculator">
      <form onSubmit={handleSubmit}>
        <h2>Рассчитайте предварительную стоимость ремонта</h2>

        <label htmlFor="area">Площадь</label>
        <input
          type="range"
          id="area"
          name="area"
          min="20"
          max="200"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
        <span>{area}</span>
        
        <label htmlFor="designProject">Нужен ли дизайн проект</label>
        <select
          id="designProject"
          value={needDesignProject}
          onChange={(e) => setNeedDesignProject(e.target.value)}
        >
          <option value={true}>Да</option>
          <option value={false}>Нет</option>
        </select>
        <label>
          <input type="checkbox" />
          Я согласен на обработку персональных данных
        </label>
       
        <button type="submit">Рассчитать стоимость</button>
      </form>
    </div>
  );
};

export default PopupForm;
