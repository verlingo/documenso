import { RECIPIENT_ROLES_DESCRIPTION } from '@documenso/lib/constants/recipient-roles';
import type { RecipientRole } from '@documenso/prisma/client';

import { Button, Column, Heading, Img, Row, Section, Text } from '../components';

export interface TemplateDocumentInviteProps {
  inviterName: string;
  inviterEmail: string;
  documentName: string;
  signDocumentLink: string;
  assetBaseUrl: string;
  role: RecipientRole;
  selfSigner: boolean;
}

export const TemplateDocumentInvite = ({
  inviterName,
  documentName,
  signDocumentLink,
  assetBaseUrl,
  role,
  selfSigner,
}: TemplateDocumentInviteProps) => {
  const { actionVerb, progressiveVerb } = RECIPIENT_ROLES_DESCRIPTION[role];

  return (
    <>
      <Row>
        <Column style={alignCenter}>
          <Heading
            as="h2"
            style={{
              fontSize: 26,
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: 20,
              paddingTop: 20,
            }}
          >
            IHRE UNTERSCHRIFT WIRD BENÖTIGT.
          </Heading>
        </Column>
      </Row>
      <Row>
        <Column style={alignCenter}>
          <Img width={400} src={`${assetBaseUrl}/static/signing.png`} />
          {/* <TemplateDocumentImage className="mt-6" assetBaseUrl={assetBaseUrl} /> */}
        </Column>
      </Row>

      <Section style={container}>
        <Heading
          className="text-primary mx-auto mb-0 max-w-[80%] text-center text-lg font-semibold"
          as="h3"
        >
          {/* {selfSigner ? (
            <>
              {`Please ${actionVerb.toLowerCase()} your document`}
              <br />
              {`"${documentName}"`}
            </>
          ) : (
            <>
              {`${inviterName} has invited you to ${actionVerb.toLowerCase()}`}
              <br />
              {`"${documentName}"`}
            </>
          )} */}
          Wir benötigen Ihre Unterschrift für folgendes Arbeitszeugnis:
        </Heading>

        <Text className="mb-1 mt-0 text-center text-base">
          <br />
          {`"${documentName}"`}
        </Text>
        <Text className="my-1 text-center text-base text-slate-400">
          {/* Continue by {progressiveVerb.toLowerCase()} the document.  */}
          Um fortzufahren, klicken Sie auf den Button "Jetzt unterschreiben", dort können Sie ganz
          unkompliziert das Dokument digital unterzeichnen.
        </Text>

        {/* <Section className="mb-6 mt-8 text-center"> */}
        <Row style={{ paddingTop: '0' }}>
          <Column style={signButton}>
            <Button style={signButton} href={signDocumentLink}>
              Jetzt unterschreiben
            </Button>
          </Column>
        </Row>
        {/* </Section> */}
      </Section>
    </>
  );
};

export default TemplateDocumentInvite;

const signButton = {
  backgroundColor: '#5eba00',
  color: '#FFFFFF',
  border: 'none',
  borderRadius: '4px',
  padding: '10px 24px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  textDecoration: 'none',
  textAlign: 'center',
  width: '100px',
  // maxWidth: '300px',
};
const container = {
  maxWidth: '600px',
  textAlign: 'center',
  // padding: '20px',
};
const alignCenter = {
  textAlign: 'center',
  justifyContent: 'center',
};
