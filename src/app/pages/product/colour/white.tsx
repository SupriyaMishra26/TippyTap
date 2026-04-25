// pages/product/colour/White.tsx
import ColourPageTemplate from '../../../components/ColourPageTemplate';
import { colourData } from './data/colours';

const data = colourData.white;

export default function White() {
  return <ColourPageTemplate data={data} />;
}