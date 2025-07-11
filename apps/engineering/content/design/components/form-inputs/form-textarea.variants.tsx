import { RenderComponentWithSnippet } from "@/app/components/render";
import { FormTextarea } from "@unkey/ui";

export const DefaultFormTextareaVariant = () => {
  return (
    <RenderComponentWithSnippet
      customCodeSnippet={`<FormTextarea
  label="Description"
  description="Provide a detailed description of your project"
  placeholder="e.g. A fellowship to destroy the One Ring..."
/>`}
    >
      <FormTextarea
        label="Description"
        description="Provide a detailed description of your project"
        placeholder="e.g. A fellowship to destroy the One Ring..."
      />
    </RenderComponentWithSnippet>
  );
};

// Required field variant
export const RequiredFormTextareaVariant = () => {
  return (
    <RenderComponentWithSnippet
      customCodeSnippet={`<FormTextarea
  label="Message"
  description="Share your thoughts with the council"
  required
  placeholder="Speak, friend, and enter your message here..."
/>`}
    >
      <FormTextarea
        label="Message"
        description="Share your thoughts with the council"
        required
        placeholder="Speak, friend, and enter your message here..."
      />
    </RenderComponentWithSnippet>
  );
};

// Required field with error variant
export const RequiredWithErrorFormTextareaVariant = () => {
  return (
    <RenderComponentWithSnippet
      customCodeSnippet={`<FormTextarea
  label="Quest Description"
  required
  error="Your quest description is too short"
  placeholder="Describe your quest in detail..."
/>`}
    >
      <FormTextarea
        label="Quest Description"
        required
        error="Your quest description is too short"
        placeholder="Describe your quest in detail..."
      />
    </RenderComponentWithSnippet>
  );
};

// Optional field variant
export const OptionalFormTextareaVariant = () => {
  return (
    <RenderComponentWithSnippet
      customCodeSnippet={`<FormTextarea
  label="Additional Comments"
  description="Any other information you'd like to share"
  optional
  placeholder="Tell us anything else that might be relevant..."
/>`}
    >
      <FormTextarea
        label="Additional Comments"
        description="Any other information you'd like to share"
        optional
        placeholder="Tell us anything else that might be relevant..."
      />
    </RenderComponentWithSnippet>
  );
};

// Success variant
export const SuccessFormTextareaVariant = () => {
  return (
    <RenderComponentWithSnippet
      customCodeSnippet={`<FormTextarea
  rows={4}
  label="Public Key"
  description="Your public key has been verified"
  variant="success"
  defaultValue={\`-----BEGIN PUBLIC KEY-----
  MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCridrK
  -----END PUBLIC KEY-----\`}
  placeholder="Enter your public key"
/>`}
    >
      <FormTextarea
        rows={4}
        label="Public Key"
        description="Your public key has been verified"
        variant="success"
        defaultValue={`-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCridrK
-----END PUBLIC KEY-----`}
        placeholder="Enter your public key"
      />
    </RenderComponentWithSnippet>
  );
};

// Warning variant
export const WarningFormTextareaVariant = () => {
  return (
    <RenderComponentWithSnippet
      customCodeSnippet={`<FormTextarea
  label="Notes"
  description="This content will be visible to all team members"
  variant="warning"
  placeholder="Enter your private notes here"
/>`}
    >
      <FormTextarea
        label="Notes"
        description="This content will be visible to all team members"
        variant="warning"
        placeholder="Enter your private notes here"
      />
    </RenderComponentWithSnippet>
  );
};

// Error variant
export const ErrorFormTextareaVariant = () => {
  return (
    <RenderComponentWithSnippet
      customCodeSnippet={`<FormTextarea
  label="Code Snippet"
  error="Invalid syntax in your code"
  placeholder="function castRing() { ... }"
/>`}
    >
      <FormTextarea
        label="Code Snippet"
        error="Invalid syntax in your code"
        placeholder="function castRing() { ... }"
      />
    </RenderComponentWithSnippet>
  );
};

// Disabled variant
export const DisabledFormTextareaVariant = () => {
  return (
    <RenderComponentWithSnippet
      customCodeSnippet={`<FormTextarea
  label="Terms and Conditions"
  description="Cannot be modified by regular users"
  disabled
  defaultValue="One does not simply walk into Mordor. Its black gates are guarded by more than just Orcs."
  placeholder="Terms and conditions text"
/>`}
    >
      <FormTextarea
        label="Terms and Conditions"
        description="Cannot be modified by regular users"
        disabled
        defaultValue="One does not simply walk into Mordor. Its black gates are guarded by more than just Orcs."
        placeholder="Terms and conditions text"
      />
    </RenderComponentWithSnippet>
  );
};

// With default value
export const DefaultValueFormTextareaVariant = () => {
  return (
    <RenderComponentWithSnippet
      customCodeSnippet={`<FormTextarea
  label="Meeting Minutes"
  description="Notes from the Council of Elrond"
  defaultValue="The Ring must be destroyed. It must be taken deep into Mordor and cast back into the fiery chasm from whence it came."
  placeholder="Enter meeting notes"
/>`}
    >
      <FormTextarea
        label="Meeting Minutes"
        description="Notes from the Council of Elrond"
        defaultValue="The Ring must be destroyed. It must be taken deep into Mordor and cast back into the fiery chasm from whence it came."
        placeholder="Enter meeting notes"
      />
    </RenderComponentWithSnippet>
  );
};

// Readonly variant
export const ReadonlyFormTextareaVariant = () => {
  return (
    <RenderComponentWithSnippet
      customCodeSnippet={`<FormTextarea
  rows={5}
  label="Log Output"
  description="Copy this log for troubleshooting"
  readOnly
  defaultValue="[INFO] Fellowship initialized
  [INFO] Ring bearer assigned: Frodo Baggins 
  [WARN] Detecting nearby Nazgûl 
  [ERROR] Connection to Gondor lost"
  placeholder="Logs will appear here"
/>`}
    >
      <FormTextarea
        rows={5}
        label="Log Output"
        description="Copy this log for troubleshooting"
        readOnly
        defaultValue={`[INFO] Fellowship initialized
[INFO] Ring bearer assigned: Frodo Baggins
[WARN] Detecting nearby Nazgûl
[ERROR] Connection to Gondor lost`}
        placeholder="Logs will appear here"
      />
    </RenderComponentWithSnippet>
  );
};

// Complex example with multiple props
export const ComplexFormTextareaVariant = () => {
  return (
    <RenderComponentWithSnippet
      customCodeSnippet={`<FormTextarea
    rows={7}
    label="Custom Webhook Payload"
    description="Enter the JSON payload template for your webhook"
    required
    placeholder='{
    "event_type": "ring_destroyed",
    "data": {
    "location": "Mount Doom",
    "timestamp": "{{timestamp}}"
  }
}'
  className="max-w-lg font-mono"
  id="webhook-payload-input"
/>`}
    >
      <FormTextarea
        rows={7}
        label="Custom Webhook Payload"
        description="Enter the JSON payload template for your webhook"
        required
        placeholder={`{
    "event_type": "ring_destroyed",
    "data": {
    "location": "Mount Doom",
    "timestamp": "{{timestamp}}"
  }
}`}
        className="max-w-lg font-mono"
        id="webhook-payload-input"
      />
    </RenderComponentWithSnippet>
  );
};
