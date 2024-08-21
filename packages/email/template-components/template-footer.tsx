import { Section, Text } from '../components';

export type TemplateFooterProps = {
  isDocument?: boolean;
};

export const TemplateFooter = ({ isDocument = true }: TemplateFooterProps) => {
  return (
    <Section style={footer}>
      {/* {isDocument && (
        <Text className="my-4 text-base text-slate-400">
          This document was sent using{' '}
          <Link className="text-[#7AC455]" href="https://documen.so/mail-footer">
            Documenso.
          </Link>
        </Text>
      )}

      <Text className="my-8 text-sm text-slate-400">
        Documenso, Inc.
        <br />
        2261 Market Street, #5211, San Francisco, CA 94114, USA
      </Text> */}
      <Text className="my-8 text-sm text-slate-400">
        {/* verlingo GmbH
        <br />
        Ludwig-Erhardt-Straße 18, 20597 Hamburg, Germany */}
        Dieser Service wird bereitgestellt durch die verlingo GmbH. Für technische Fragen
        kontaktieren Sie uns gerne unter der nachfolgenden E-Mail-Adresse: support@verlingo.de
      </Text>
    </Section>
  );
};

export default TemplateFooter;
const footer = {
  textAlign: 'center',
  justifyContent: 'center',
  maxWidth: '600px',
};
