export interface InfosContact {
  name: string;
  whatsapp: string;
  email: string;
  tel: string;
}

interface InfosList {
  list: InfosContact[];
}

export const InfosUser = ({ list }: InfosList) => {
  return (
    <>
      <div>
        {list.map((element, index) => (
          <p key={index}>{element.name}</p>
        ))}
      </div>
    </>
  );
};
