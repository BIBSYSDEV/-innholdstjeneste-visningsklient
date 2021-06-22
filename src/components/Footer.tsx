import React, { FC } from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  height: 2rem;
  width: 95%;
  align-items: center;
  color: rgba(80, 80, 80, 1);
  text-align: left;
  font-family: Barlow, sans-serif;
  font-size: 11px;
  font-style: italic;
  padding-left: 1rem;
  padding-bottom: 1em;
`;

const Source = styled.div`
  padding-bottom: 1em;
`;

export function getSourceType(src: string) {
  switch (src) {
    case 'NIELSEN':
      return 'Nielsen BookData';
    case 'BOKBASEN':
      return 'Bokbasen';
    default:
      //ALMA, ADABAS, BIBSYS
      return 'Unit';
  }
}

interface FooterProps {
  source: string;
}

const Footer: FC<FooterProps> = (props) => {
  return (
    <Bar>
      <Source>Kilder: {getSourceType(props.source)}</Source>
      Det er <strong>IKKE</strong> tillatt å kopiere/laste ned innholdsinformasjon (bilde, beskrivelse,
      innholdsfortegnelse, lydfiler m.m.) og bruke det i andre sammenhenger/tjenester.
    </Bar>
  );
};

export default Footer;
