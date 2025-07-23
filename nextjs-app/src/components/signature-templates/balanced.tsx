import { SignatureData } from '@/types/signature';
import Image from 'next/image';

interface BalancedSignatureProps {
  data: SignatureData;
}

export function BalancedSignature({ data }: BalancedSignatureProps) {
  const generateLogo = (altText: string) => {
    const logoImg = (
      <Image 
        src="/static/logo/Black.png" 
        alt={altText} 
        width={120}
        height={40}
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
    <div className="signature-balanced text-sm w-fit inline-block">
      <div className="flex items-start gap-4 min-w-fit">
        <div className="flex-1 space-y-1">
          {data.fullName && (
            <div className="font-semibold text-gray-900">{data.fullName}</div>
          )}
          {data.jobTitle && (
            <div className="text-gray-700">{data.jobTitle}</div>
          )}
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
        </div>
        
        {data.company && (
          <div className="flex-shrink-0">
            {generateLogo(data.company)}
          </div>
        )}
      </div>
      
      {data.websiteUrl && data.websiteLabel && (
        <div 
          className={`mt-3 text-${data.websiteAlignment || 'center'}`}
        >
          <a 
            href={data.websiteUrl} 
            className="text-gray-900 no-underline font-semibold"
          >
            {data.websiteLabel}
          </a>
        </div>
      )}
    </div>
  );
} 