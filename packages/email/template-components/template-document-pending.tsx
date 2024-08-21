// import { Column, Img, Section, Text } from '../components';
// import { TemplateDocumentImage } from './template-document-image';
// export interface TemplateDocumentPendingProps {
//   documentName: string;
//   assetBaseUrl: string;
// }
// export const TemplateDocumentPending = ({
//   documentName,
//   assetBaseUrl,
// }: TemplateDocumentPendingProps) => {
//   const getAssetUrl = (path: string) => {
//     return new URL(path, assetBaseUrl).toString();
//   };
//   return (
//     <>
//       <TemplateDocumentImage className="mt-6" assetBaseUrl={assetBaseUrl} />
//       <Section>
//         <Section className="mb-4">
//           <Column align="center">
//             <Text className="text-base font-semibold text-blue-500">
//               <Img
//                 src={getAssetUrl('/static/clock.png')}
//                 className="-mt-0.5 mr-2 inline h-7 w-7 align-middle"
//               />
//               Waiting for others
//             </Text>
//           </Column>
//         </Section>
//         <Text className="text-primary mb-0 text-center text-lg font-semibold">
//           “{documentName}” has been signed
//         </Text>
//         <Text className="mx-auto mb-6 mt-1 max-w-[80%] text-center text-base text-slate-400">
//           We're still waiting for other signers to sign this document.
//           <br />
//           We'll notify you as soon as it's ready.
//         </Text>
//       </Section>
//     </>
//   );
// };
// export default TemplateDocumentPending;
// import { RECIPIENT_ROLES_DESCRIPTION } from '@documenso/lib/constants/recipient-roles';
import { Column, Heading, Img, Row, Section, Text } from '../components';

export interface TemplateDocumentPendingProps {
  documentName: string;
  assetBaseUrl: string;
}

export const TemplateDocumentPending = ({
  documentName,
  assetBaseUrl,
}: TemplateDocumentPendingProps) => {
  // const { actionVerb, progressiveVerb } = RECIPIENT_ROLES_DESCRIPTION[role];

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
              marginBottom: 10,
              paddingTop: 20,
            }}
          >
            Das Dokument wurde unterzeichnet.
          </Heading>
        </Column>
      </Row>
      <Row>
        <Column style={alignCenter}>
          <Img width={300} src={`${assetBaseUrl}/static/wait.png`} />
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
          Es wird noch auf weitere Unterschriften für folgendes Arbeitszeugnis gewartet:
        </Heading>

        <Text className="mb-1 mt-0 text-center text-base">
          <br />
          {`"${documentName}"`}
        </Text>
        {/* <Text className="my-1 text-center text-base text-slate-400">
          Um fortzufahren, klicken Sie auf den Button "Jetzt unterschreiben", dort können Sie ganz
          unkompliziert das Dokument digital unterzeichnen.
        </Text> */}

        {/* <Section className="mb-6 mt-8 text-center"> */}
        {/* <Row style={{ paddingTop: '0' }}>
          <Column style={signButton}>
            <Button style={signButton} href={signDocumentLink}>
              Jetzt unterschreiben
            </Button>
          </Column>
        </Row> */}
        {/* </Section> */}
      </Section>
    </>
  );
};

export default TemplateDocumentPending;

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
