function GoogleMap({ mapURL }) {
  return (
    <iframe
      src={mapURL}
      allowFullScreen
      height="400"
      width="100%"
      loading="lazy"
      referrerPolicy="no-referrer"
      title="Gondar Car Rental"
    ></iframe>
  );
}

export default GoogleMap;
