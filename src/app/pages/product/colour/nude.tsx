import { createFileRoute } from '@tanstack/react-router';

import ColourPageTemplate from '../../../components/ColourPageTemplate';
import { colourData } from './data/colours';

const data = colourData.nude;

export default function Nude() {
  return <ColourPageTemplate data={data} />;
}

