import { SignatureData } from '@/types/signature';
import Image from 'next/image';

interface CompactSignatureProps {
  data: SignatureData;
}

export function CompactSignature({ data }: CompactSignatureProps) {
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
    <div className="signature-compact space-y-1 text-sm w-fit inline-block">
      {data.fullName && (
        <div className="font-semibold text-gray-900">{data.fullName}</div>
      )}
      {data.jobTitle && (
        <div className="text-gray-700">{data.jobTitle}</div>
      )}
      {data.websiteUrl && data.websiteLabel && (
        <div>
          <a 
            href={data.websiteUrl} 
            className="text-blue-600 underline hover:text-blue-800"
          >
            {data.websiteLabel}
          </a>
        </div>
      )}
      {data.phone && (
        <div className="text-gray-700">{data.phone}</div>
      )}
      {data.company && (
        <div className="mt-2">
          {generateLogo(data.company)}
        </div>
      )}
    </div>
  );
} 