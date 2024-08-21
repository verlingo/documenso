// import { Button, Column, Img, Section, Text } from '../components';
// import { TemplateDocumentImage } from './template-document-image';
// export interface TemplateDocumentCompletedProps {
//   downloadLink: string;
//   documentName: string;
//   assetBaseUrl: string;
//   customBody?: string;
// }
// export const TemplateDocumentCompleted = ({
//   downloadLink,
//   documentName,
//   assetBaseUrl,
//   customBody,
// }: TemplateDocumentCompletedProps) => {
//   const getAssetUrl = (path: string) => {
//     return new URL(path, assetBaseUrl).toString();
//   };
//   return (
//     <>
//       <TemplateDocumentImage className="mt-6" assetBaseUrl={assetBaseUrl} />
//       <Section>
//         <Section className="mb-4">
//           <Column align="center">
//             <Text className="row text-base font-semibold text-[#7AC455]">
//               <Img
//                 src={getAssetUrl('/static/completed.png')}
//                 className="-mt-0.5 mr-2 inline h-7 w-7 align-middle"
//               />
//               <div className="col-12">Completed</div>
//             </Text>
//           </Column>
//         </Section>
//         <Text className="text-primary mb-0 text-center text-lg font-semibold">
//           {customBody ?? `“${documentName}” was signed by all signers`}
//         </Text>
//         <Text className="my-1 text-center text-base text-slate-400">
//           Continue by downloading the document.
//         </Text>
//         <Section className="mb-6 mt-8 text-center">
//           {/* <Button
//             className="mr-4 inline-flex items-center justify-center rounded-lg border border-solid border-slate-200 px-4 py-2 text-center text-sm font-medium text-black no-underline"
//             href={reviewLink}
//           >
//             <Img src={getAssetUrl('/static/review.png')} className="-mb-1 mr-2 inline h-5 w-5" />
//             Review
//           </Button> */}
//           <Button
//             className="row rounded-lg border border-none  px-4 py-2 text-center text-sm font-medium text-black no-underline"
//             href={downloadLink}
//           >
//             <Img
//               src={getAssetUrl('/static/download.png')}
//               className="mb-0.5 mr-2 inline h-5 w-5 align-middle"
//             />
//             <div className="Download col-12"></div>
//           </Button>
//         </Section>
//       </Section>
//     </>
//   );
// };
// export default TemplateDocumentCompleted;
// import { RECIPIENT_ROLES_DESCRIPTION } from '@documenso/lib/constants/recipient-roles';
import { Button, Column, Heading, Img, Row, Section, Text } from '../components';

export interface TemplateDocumentCompletedProps {
  inviterEmail: string;
  documentName: string;
  downloadLink: string;
  assetBaseUrl: string;
}

export const TemplateDocumentCompleted = ({
  documentName,
  downloadLink,
  assetBaseUrl,
}: TemplateDocumentCompletedProps) => {
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
              paddingTop: 20,
            }}
          >
            Alle Beteiligten haben das Dokument unterzeichnet.
          </Heading>
        </Column>
      </Row>
      <Row>
        <Column style={alignCenter}>
          <Img width={300} src={`${assetBaseUrl}/static/complete.png`} />
        </Column>
      </Row>

      <Section style={container}>
        {/* <Heading
          className="text-primary mx-auto mb-0 max-w-[80%] text-center text-lg font-semibold"
          as="h3"
        >
          Wir benötigen Ihre Unterschrift für folgendes Arbeitszeugnis:
        </Heading> */}

        <Text className="mb-1 mt-0 text-center text-base">
          <br />
          {`"${documentName}"`} wurde von allen unterzeichnet.
        </Text>
        <Text className="my-1 text-center text-base text-slate-400">
          Das Dokument kann jetzt heruntergeladen werden.
        </Text>

        <Row style={{ paddingTop: '0' }}>
          <Column style={signButton}>
            <Button style={signButton} href={downloadLink}>
              Jetzt herunterladen
            </Button>
          </Column>
        </Row>
      </Section>
    </>
  );
};

export default TemplateDocumentCompleted;

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
