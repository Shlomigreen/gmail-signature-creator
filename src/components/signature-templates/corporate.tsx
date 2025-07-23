import { SignatureData } from '@/types/signature';
import Image from 'next/image';

interface CorporateSignatureProps {
  data: SignatureData;
}

export function CorporateSignature({ data }: CorporateSignatureProps) {
  const generateLogo = (altText: string) => {
    const logoImg = (
      <Image 
        src="/static/logo/Black.png" 
        alt={altText} 
        width={150}
        height={50}
        className="h-auto"
      />
    );
    
    if (data.logoHyperlink && data.logoUrl) {
      return (
        <a href={data.logoUrl} className="text-decoration-none">
          {logoImg}
        </a>
      );
    }
    return logoImg;
  };

  return (
    <div className="signature-corporate text-sm space-y-2 w-fit inline-block">
      {data.company && (
        <div className="mb-3">
          {generateLogo(data.company)}
        </div>
      )}
      
      {data.fullName && (
        <div className="font-semibold text-gray-900 text-base">{data.fullName}</div>
      )}
      {data.jobTitle && (
        <div className="text-gray-700">{data.jobTitle}</div>
      )}
      
      <div className="space-y-1">
        {data.phone && (
          <div className="text-gray-700">
            <strong>Mobile:</strong> {data.phone}
          </div>
        )}
        {data.email && (
          <div className="text-gray-700">
            <strong>Email:</strong>{' '}
            <a href={`mailto:${data.email}`} className="text-gray-900 no-underline">
              {data.email}
            </a>
          </div>
        )}
        {data.showLinkedin && data.linkedin && (
          <div className="text-gray-700">
            <strong>LinkedIn:</strong>{' '}
            <a 
              href={`https://linkedin.com/in/${data.linkedin}`} 
              className="text-gray-900 no-underline"
            >
              {data.linkedin}
            </a>
          </div>
        )}
        {data.showTwitter && data.twitter && (
          <div className="text-gray-700">
            <strong>X:</strong>{' '}
            <a 
              href={`https://x.com/${data.twitter}`} 
              className="text-gray-900 no-underline"
            >
              @{data.twitter}
            </a>
          </div>
        )}
        {data.websiteUrl && data.websiteLabel && (
          <div className="flex items-center gap-1">
            <Image 
              src="/static/icons/global-line.png" 
              alt="Website" 
              width={16}
              height={16}
              className="inline"
            />
            <a 
              href={data.websiteUrl} 
              className="text-gray-900 no-underline font-semibold"
            >
              {data.websiteLabel}
            </a>
          </div>
        )}
      </div>
    </div>
  );
} 