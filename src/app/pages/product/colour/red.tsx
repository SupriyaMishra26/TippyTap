import ColourPageTemplate from '../../../components/ColourPageTemplate';
import { colourData } from './data/colours';

const data = colourData.red;

export default function Red() {
  return <ColourPageTemplate data={data} />;
}