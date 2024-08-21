import config from '@documenso/tailwind-config';

import { Body, Container, Head, Html, Img, Preview, Section, Tailwind } from '../components';
import type { TemplateDocumentCompletedProps } from '../template-components/template-document-completed';
import { TemplateDocumentCompleted } from '../template-components/template-document-completed';
import { TemplateFooter } from '../template-components/template-footer';

export type DocumentCompletedEmailTemplateProps = Partial<TemplateDocumentCompletedProps> & {
  customBody?: string;
};

export const DocumentCompletedEmailTemplate = ({
  downloadLink = 'https://documenso.com',
  documentName = 'Open Source Pledge.pdf',
  assetBaseUrl = 'http://localhost:3002',
  customBody,
}: DocumentCompletedEmailTemplateProps) => {
  const previewText = `Completed Document`;

  const getAssetUrl = (path: string) => {
    return new URL(path, assetBaseUrl).toString();
  };

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: config.theme.extend.colors,
            },
          },
        }}
      >
        <Body style={body} className="mx-auto my-auto font-sans">
          <Section className="">
            {/* <Container className="mx-auto mb-2 mt-8 max-w-xl rounded-lg border border-solid border-slate-200 p-2 backdrop-blur-sm">
              <Section className="p-2">
                <Img
                  src={getAssetUrl('/static/logo.png')}
                  alt="Documenso Logo"
                  className="mb-4 h-6"
                />

                <TemplateDocumentCompleted
                  downloadLink={downloadLink}
                  documentName={documentName}
                  assetBaseUrl={assetBaseUrl}
                  customBody={customBody}
                />
              </Section>
            </Container> */}
            <Container
              style={emailWrapper}
              className="mx-auto rounded-lg border border-solid border-slate-200 bg-white shadow-lg"
            >
              <Section style={{ padding: 30 }}>
                <Img
                  src={getAssetUrl('/static/logo.png')}
                  alt="verlingo Logo"
                  className="m-6 mb-4 h-6"
                  style={{ marginBottom: 150 }}
                />

                <TemplateDocumentCompleted
                  downloadLink={downloadLink}
                  documentName={documentName}
                  assetBaseUrl={assetBaseUrl}
                />
              </Section>
            </Container>

            <Container className="mx-auto max-w-xl">
              <TemplateFooter />
            </Container>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default DocumentCompletedEmailTemplate;
const emailWrapper = {
  maxWidth: '600px',
  // padding: '1.0rem',
  borderRadius: '0.5rem',
};
const body = {
  backgroundColor: '#f5f7fb',
};
