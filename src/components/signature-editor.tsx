'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { SignatureData } from '@/types/signature';
import { CompactSignature, BalancedSignature, CorporateSignature, ModernSignature } from './signature-templates';
import { Copy, Download } from 'lucide-react';

const signatureSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  jobTitle: z.string().min(1, 'Job title is required'),
  company: z.string().min(1, 'Company is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(1, 'Phone number is required'),
  websiteUrl: z.string(),
  websiteLabel: z.string(),
  websiteDisplay: z.enum(['icon', 'bottom']).optional(),
  logoHyperlink: z.boolean(),
  logoUrl: z.string(),
  template: z.enum(['compact', 'balanced', 'corporate', 'modern']),
  websiteAlignment: z.enum(['center', 'left', 'right']).optional(),
  showLinkedin: z.boolean(),
  linkedin: z.string(),
  showTwitter: z.boolean(),
  twitter: z.string(),
});

const templates = [
  { id: 'compact', name: 'Compact', description: 'Minimalist design with essential information' },
  { id: 'balanced', name: 'Balanced', description: 'Two-column layout with logo and contact info' },
  { id: 'corporate', name: 'Corporate', description: 'Professional layout with company logo prominence' },
  { id: 'modern', name: 'Modern', description: 'Contemporary design with social media icons' },
];

export function SignatureEditor() {
  const [copySuccess, setCopySuccess] = useState(false);

  const form = useForm<SignatureData>({
    resolver: zodResolver(signatureSchema),
    defaultValues: {
      fullName: 'John Smith',
      jobTitle: 'Software Engineer',
      company: 'Engini',
      email: 'john.smith@engini.io',
      phone: '+1-555-123-4567',
      websiteUrl: 'https://www.engini.io',
      websiteLabel: 'www.engini.io',
      websiteDisplay: 'icon',
      logoHyperlink: true,
      logoUrl: 'https://www.engini.io',
      template: 'modern',
      websiteAlignment: 'center',
      showLinkedin: true,
      linkedin: 'johnsmith',
      showTwitter: true,
      twitter: 'johnsmith',
    },
  });

  const watchedData = form.watch();

  const renderSignature = () => {
    switch (watchedData.template) {
      case 'compact':
        return <CompactSignature data={watchedData} />;
      case 'balanced':
        return <BalancedSignature data={watchedData} />;
      case 'corporate':
        return <CorporateSignature data={watchedData} />;
      case 'modern':
        return <ModernSignature data={watchedData} />;
      default:
        return <ModernSignature data={watchedData} />;
    }
  };

  const copyToClipboard = async () => {
    try {
      const signatureElement = document.getElementById('signature-preview');
      if (!signatureElement) return;

      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(signatureElement);
      selection?.removeAllRanges();
      selection?.addRange(range);
      
      document.execCommand('copy');
      selection?.removeAllRanges();
      
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 3000);
    } catch (error) {
      console.error('Failed to copy signature:', error);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Gmail Signature Creator</h1>
        <p className="text-gray-600">Create professional email signatures for your business Gmail account</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Editor Panel */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Design Your Signature</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Form {...form}>
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="jobTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Job Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Software Engineer" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Tech Corp" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 (555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="websiteUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website URL</FormLabel>
                          <FormControl>
                            <Input placeholder="https://example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="websiteLabel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website Label</FormLabel>
                          <FormControl>
                            <Input placeholder="www.example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <Separator />

                {/* Social Networks */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Social Networks</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="showLinkedin"
                        checked={form.watch('showLinkedin')}
                        onChange={(e) => form.setValue('showLinkedin', e.target.checked)}
                        className="rounded"
                      />
                      <Label htmlFor="showLinkedin">Show LinkedIn</Label>
                    </div>
                    {form.watch('showLinkedin') && (
                      <FormField
                        control={form.control}
                        name="linkedin"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>LinkedIn Username</FormLabel>
                            <FormControl>
                              <Input placeholder="johndoe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="showTwitter"
                        checked={form.watch('showTwitter')}
                        onChange={(e) => form.setValue('showTwitter', e.target.checked)}
                        className="rounded"
                      />
                      <Label htmlFor="showTwitter">Show X (Twitter)</Label>
                    </div>
                    {form.watch('showTwitter') && (
                      <FormField
                        control={form.control}
                        name="twitter"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>X Username</FormLabel>
                            <FormControl>
                              <Input placeholder="johndoe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </div>
                </div>

                <Separator />

                {/* Template Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Template</h3>
                  <FormField
                    control={form.control}
                    name="template"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Choose Template</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a template" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {templates.map((template) => (
                              <SelectItem key={template.id} value={template.id}>
                                <div>
                                  <div className="font-medium">{template.name}</div>
                                  <div className="text-sm text-gray-500">{template.description}</div>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Template-specific options */}
                  {form.watch('template') === 'balanced' && (
                    <FormField
                      control={form.control}
                      name="websiteAlignment"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website Alignment</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select alignment" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="center">Center</SelectItem>
                              <SelectItem value="left">Left</SelectItem>
                              <SelectItem value="right">Right</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {form.watch('template') === 'modern' && (
                    <FormField
                      control={form.control}
                      name="websiteDisplay"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website Display</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select display style" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="icon">Show as icon in social links</SelectItem>
                              <SelectItem value="bottom">Show as section at bottom</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="logoHyperlink"
                        checked={form.watch('logoHyperlink')}
                        onChange={(e) => form.setValue('logoHyperlink', e.target.checked)}
                        className="rounded"
                      />
                      <Label htmlFor="logoHyperlink">Make logo clickable</Label>
                    </div>
                    {form.watch('logoHyperlink') && (
                      <FormField
                        control={form.control}
                        name="logoUrl"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Logo URL</FormLabel>
                            <FormControl>
                              <Input placeholder="https://www.example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </div>
                </div>
              </Form>
            </CardContent>
          </Card>
        </div>

        {/* Preview Panel */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm flex justify-center">
                <div className="bg-white rounded-md p-4 shadow-sm border border-gray-100 w-fit">
                  <div id="signature-preview">
                    {renderSignature()}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 space-y-4">
                <div className="flex gap-2">
                  <Button onClick={copyToClipboard} className="flex-1">
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Signature
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                </div>
                
                {copySuccess && (
                  <div className="text-center">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Signature copied to clipboard!
                    </Badge>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card>
            <CardHeader>
              <CardTitle>How to Add to Gmail</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm">
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Copy your signature using the &ldquo;Copy Signature&rdquo; button above</li>
                <li>Go to Gmail Settings (gear icon → &ldquo;See all settings&rdquo;)</li>
                <li>Scroll to &ldquo;Signature&rdquo; section</li>
                <li>Click &ldquo;Create new&rdquo; and give it a name</li>
                <li>In the signature editor, paste using <strong>Ctrl+V</strong> (Windows) or <strong>Cmd+V</strong> (Mac)</li>
                <li>Save changes and select as default signature</li>
              </ol>
              <p className="text-xs text-gray-500 mt-4">
                <strong>Note:</strong> If formatting is lost, try pasting with Ctrl+Shift+V and reformat manually.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 