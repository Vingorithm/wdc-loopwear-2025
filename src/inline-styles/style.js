const styles = () => {
    return {
        bgColor: {
            backgroundColor: "#FCFBF0",
        },

        profilePicture: {
          borderRadius: "100%",
          objectFit: "cover",
          objectPosition: "center",
          width: '140px',
          height: '140px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#666',
          border: '2px solid #39754B',
        },

        languageFlag: {
          width: '50px', 
          height: '50px', 
          backgroundColor: '#eee', 
          border: '2px solid #39754B'
        },

        paymentLogo: {
          width: "80%",
          aspectRatio: "2.3/1",
          objectPosition: "center",
          border: '2px solid #39754B'
        },

        formControl: {
          borderColor: '#39754B', 
          backgroundColor: "#FCFBF0"
        },

        navbar: {
          backgroundColor: "#FCFBF0",
          borderBottom: "2px solid #ddd",
          padding: "15px 30px",
        },

        logoContainer: {
          display: "flex",
          alignItems: "center",
        },
        
        logo: {
          height: "50px",
          transform: "scale(5)",
          transformOrigin: "center", 
          marginLeft: "30px",
          marginTop: "3px",
        },

      };
}

export default styles;