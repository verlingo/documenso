import { Column, Img, Row, Section } from '../components';

export interface TemplateDocumentImageProps {
  assetBaseUrl: string;
  className?: string;
}

export const TemplateDocumentImage = ({ assetBaseUrl, className }: TemplateDocumentImageProps) => {
  const getAssetUrl = (path: string) => {
    return new URL(path, assetBaseUrl).toString();
  };

  return (
    <Section className={className}>
      <Row className="justify-content-center table-fixed">
        <Column />

        <Column className="justify-content-center text-center">
          <Img
            className="h-42 bg-primary mx-auto border"
            src={getAssetUrl('/static/document.png')}
            alt="Documenso"
          />
        </Column>

        <Column />
      </Row>
    </Section>
  );
};

export default TemplateDocumentImage;
