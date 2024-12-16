# VGS_POC
To address the PCI compliance requirements for our company and ensure sensitive details like card information don’t flow through your network, here's a poc for it.


# DESCRIPTION
OUTBOUND_CONNECTION : Outbound connections refer to the data or requests leaving VGS to interact with external services or vendors (e.g., VGS sending  data to a vendor for processing). </br>
OUTBOUND_PROXY : VGS URL </br>
ACCESS_CREDENTIALS : user credentials </br>
NODE_EXTRA_CA_CERTS : Certicate needed for outbound </br>
VENDOR_URL : THIRD PARTY URL OR SERVER_UPSTREAM_HOST.</br>

# How to Run

1. **Proper Configuration in VGS Dashboard**
   - Ensure that you have set up the necessary configurations in the VGS (Very Good Security) Dashboard. This includes setting up your vault, routes, and rules to manage the secure handling of  data and larky code if using larky feature
2. **Initialize Node.js Project**
     npm init 
3. **Assign Variables**
   - Assign all necessary environment variables. For security purposes, i have used dotenv
4. **Run the Application**
   - Execute the following command to run your application:
     node outboud.js
      
