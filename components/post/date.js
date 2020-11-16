import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  console.log(dateString);
  const date = parseISO(dateString);
  console.log(date);
  return <div className="text-primaryDark font-bold"><time dateTime={date}>{format(date, 'LLLL	d, yyyy')}</time></div>
}
