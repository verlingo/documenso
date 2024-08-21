// import { Section, Text } from '../components';
// import { TemplateDocumentImage } from './template-document-image';
// export interface TemplateDocumentCancelProps {
//   inviterName: string;
//   inviterEmail: string;
//   documentName: string;
//   assetBaseUrl: string;
// }
// export const TemplateDocumentCancel = ({
//   inviterName,
//   documentName,
//   assetBaseUrl,
// }: TemplateDocumentCancelProps) => {
//   return (
//     <>
//       <TemplateDocumentImage className="mt-6" assetBaseUrl={assetBaseUrl} />
//       <Section>
//         <Text className="text-primary mx-auto mb-0 max-w-[80%] text-center text-lg font-semibold">
//           {inviterName} has cancelled the document
//           <br />"{documentName}"
//         </Text>
//         <Text className="my-1 text-center text-base text-slate-400">
//           All signatures have been voided.
//         </Text>
//         <Text className="my-1 text-center text-base text-slate-400">
//           You don't need to sign it anymore.
//         </Text>
//       </Section>
//     </>
//   );
// };
// export default TemplateDocumentCancel;
import { Column, Heading, Img, Row, Section, Text } from '../components';

export interface TemplateDocumentCancelProps {
  documentName: string;
  assetBaseUrl: string;
  inviterName: string;
}

export const TemplateDocumentCancel = ({
  documentName,
  assetBaseUrl,
}: TemplateDocumentCancelProps) => {
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
              marginBottom: 20,
              paddingTop: 20,
            }}
          >
            Keine Unterschrift mehr erforderlich!
          </Heading>
        </Column>
      </Row>
      <Row>
        <Column style={alignCenter}>
          <Img width={250} src={`${assetBaseUrl}/static/delete.png`} />
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
          Das Dokument {`"${documentName}"`} wurde gelöscht.
        </Text>
        <Text className="my-1 text-center text-base text-slate-400">
          Das Dokument muss nicht mehr von Ihnen unterschrieben werden.
        </Text>
      </Section>
    </>
  );
};

export default TemplateDocumentCancel;

const container = {
  maxWidth: '600px',
  textAlign: 'center',
  // padding: '20px',
};
const alignCenter = {
  textAlign: 'center',
  justifyContent: 'center',
};
