import ColourPageTemplate from '../../../components/ColourPageTemplate';
import { colourData } from './data/colours';

const data = colourData.blue;

export default function Blue() {
 return <ColourPageTemplate data={data} />;
}