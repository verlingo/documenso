import config from '@documenso/tailwind-config';

import { Body, Container, Head, Html, Img, Preview, Section, Tailwind } from '../components';
import type { TemplateDocumentCancelProps } from '../template-components/template-document-cancel';
import { TemplateDocumentCancel } from '../template-components/template-document-cancel';
import { TemplateFooter } from '../template-components/template-footer';

export type DocumentCancelEmailTemplateProps = Partial<TemplateDocumentCancelProps>;

export const DocumentCancelTemplate = ({
  inviterName = 'Lucas Smith',
  inviterEmail = 'lucas@documenso.com',
  documentName = 'Open Source Pledge.pdf',
  assetBaseUrl = 'http://localhost:3002',
}: DocumentCancelEmailTemplateProps) => {
  const previewText = `${inviterName} has cancelled the document ${documentName}, you don't need to sign it anymore.`;

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
          <Section>
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

                <TemplateDocumentCancel
                  inviterName={inviterName}
                  inviterEmail={inviterEmail}
                  documentName={documentName}
                  assetBaseUrl={assetBaseUrl}
                />
              </Section>
            </Container>

            {/* <Hr className="mx-auto mt-12 max-w-xl" /> */}

            <Container className="mx-auto max-w-xl">
              <TemplateFooter />
            </Container>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default DocumentCancelTemplate;
const emailWrapper = {
  maxWidth: '600px',
  // padding: '1.0rem',
  borderRadius: '0.5rem',
};
const body = {
  backgroundColor: '#f5f7fb',
};
