import { SimpleGrid } from "@chakra-ui/react";

function GoogleMap() {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      p={5}
      textAlign="center"
      gap={5}
      alignContent="center"
      className="gondar-map"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31149.615698551654!2d37.43513236689505!3d12.60188351130028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16432903deb758ed%3A0x69a1df405bb22ef2!2sAutomotive%20service!5e0!3m2!1sen!2set!4v1749694924268!5m2!1sen!2set"
        allowFullScreen
        height="450"
        loading="lazy"
        referrerPolicy="no-referrer"
        title="Gondar Car Rental"
      ></iframe>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11760.168378070357!2d37.39821344781037!3d11.596307786744811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1644cf70f0966745%3A0xd11c9ac1d1f1b092!2sBahirdar%20Car%20Rental!5e0!3m2!1sen!2set!4v1749696394465!5m2!1sen!2set"
        allowFullScreen
        height="450"
        loading="lazy"
        referrerPolicy="same-origin"
      ></iframe>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11369.715281467168!2d38.7169569082821!3d8.965887262424284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b86ac5b1a40f3%3A0x9654fdc325137c1a!2sSuzuki%20Automotive%20Service%20plc!5e0!3m2!1sen!2set!4v1749696453320!5m2!1sen!2set"
        allowFullScreen
        height="450"
        loading="lazy"
        referrerPolicy="origin-when-cross-origin"
      ></iframe>
    </SimpleGrid>
  );
}

export default GoogleMap;
