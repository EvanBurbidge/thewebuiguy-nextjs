const SectionHeader = ({
  title = '',
}) => (
    <div className="flex justify-center align-center mb-6 pt-24">
      <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter text-primaryDark leading-tight text-center capitalize">{title}</h1>
    </div>
)


export default SectionHeader;