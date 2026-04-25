import { createFileRoute } from '@tanstack/react-router';

import ColourPageTemplate from '../../../components/ColourPageTemplate';
import { colourData } from './data/colours';

const data = colourData.pink;

export default function Pink() {
  return <ColourPageTemplate data={data} />;
}
