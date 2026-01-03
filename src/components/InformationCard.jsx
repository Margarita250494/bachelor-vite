import Description from './layout/Description'

function InformationCard({icon, title, description}) {
  return (
    <li
      className="h-auto border-2 border-gray-100 rounded-xl
    bg-white relative"
    >
      <div
        className="absolute -top-6 left-[44%] p-2.5 bg-blueSoft-100
      rounded-[30px] max-h-11.25 text-primary-800"
      >
        {icon}
      </div>
      <h4 className="mt-8 mb-10 font-sans text-[28px] font-bold tracking-[0.8px]">{title}</h4>
      <Description
        description={description}
        variant="info"
        className="m-6! leading-6"
      />
    </li>
  )
}

export default InformationCard
