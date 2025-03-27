export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center flex items-center justify-center flex-col mt-16 text-sm">
      <div>© {currentYear} - anmol mishra</div>
      <div className="mt-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
          <path d="M12.5 16C12.5 16.2761 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.2761 11.5 16L11.5 8C11.5 7.72386 11.7239 7.5 12 7.5C12.2761 7.5 12.5 7.72386 12.5 8L12.5 16Z" fill="currentColor" />
          <path d="M18.5 12C18.5 15.5899 15.5899 18.5 12 18.5C8.41015 18.5 5.5 15.5899 5.5 12C5.5 8.41015 8.41015 5.5 12 5.5C15.5899 5.5 18.5 8.41015 18.5 12Z" stroke="currentColor" />
          <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7" stroke="currentColor" strokeLinecap="round" />
          <path d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5" stroke="currentColor" strokeLinecap="round" />
          <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10" stroke="currentColor" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  )
}
