import { createFileRoute } from '@tanstack/react-router';
import ColourPageTemplate from '../../../components/ColourPageTemplate';
import { colourData } from './data/colours';

const data = colourData.black;

export default function Black() {
  return <ColourPageTemplate data={data} />;
}