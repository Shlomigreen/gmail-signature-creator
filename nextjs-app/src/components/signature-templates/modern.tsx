import { SignatureData } from '@/types/signature';
import Image from 'next/image';

interface ModernSignatureProps {
  data: SignatureData;
}

export function ModernSignature({ data }: ModernSignatureProps) {
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
    <div className="signature-modern text-sm">
      {/* Header Section */}
      <div className="flex items-center justify-between gap-4 mb-3">
        <div className="flex-1">
          {data.fullName && (
            <div className="font-semibold text-gray-900 text-lg">{data.fullName}</div>
          )}
          {data.jobTitle && (
            <div className="text-gray-700">{data.jobTitle}</div>
          )}
        </div>
        
        {/* Social Links */}
        <div className="flex items-center gap-2">
          {data.showLinkedin && data.linkedin && (
            <a 
              href={`https://linkedin.com/in/${data.linkedin}`} 
              className="text-decoration-none"
            >
              <Image 
                src="/static/socials/Linkedin-Logo--Streamline-Logos-Block.png" 
                alt="LinkedIn" 
                width={20}
                height={20}
                className="hover:opacity-80"
              />
            </a>
          )}
          {data.showTwitter && data.twitter && (
            <a 
              href={`https://x.com/${data.twitter}`} 
              className="text-decoration-none"
            >
              <Image 
                src="/static/socials/X-Twitter-Logo--Streamline-Logos-Block.png" 
                alt="X" 
                width={20}
                height={20}
                className="hover:opacity-80"
              />
            </a>
          )}
          {data.websiteUrl && data.websiteDisplay !== 'bottom' && (
            <a 
              href={data.websiteUrl} 
              className="text-decoration-none"
            >
              <Image 
                src="/static/icons/global-line.png" 
                alt="Website" 
                width={20}
                height={20}
                className="hover:opacity-80"
              />
            </a>
          )}
        </div>
      </div>
      
      {/* Contact Info */}
      <div className="space-y-1 mb-3">
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
      </div>
      
      {/* Company Logo */}
      {data.company && (
        <div className="mb-3">
          {generateLogo(data.company)}
        </div>
      )}
      
      {/* Website Link (Bottom) */}
      {data.websiteUrl && data.websiteDisplay === 'bottom' && (
        <div>
          <a 
            href={data.websiteUrl} 
            className="text-gray-900 no-underline font-semibold"
          >
            {data.websiteLabel || data.websiteUrl}
          </a>
        </div>
      )}
    </div>
  );
} 