import random
from scapy.all import *
from scapy.utils import rdpcap
from scapy.utils import wrpcap

FILE_TO_READ = "http_redirects.pcapng"

def inject_one_flow(secret_message):
	secret_in_bits = ''.join(format(ord(b), '08b') for b in secret_message)
	secret_in_chunks= [secret_in_bits[i:i+8] for i in range(0, len(secret_in_bits), 8)]
	#print(secret_in_chunks)
	pkts = rdpcap(FILE_TO_READ)
	secret_index = 0
	wire_len = []
	for x in range(len(pkts)):
		pkts[x].tos = random.getrandbits(8)
		#print(pkts[x].tosds)

	for x in range(len(pkts)):
		wire_len.append(pkts[x].wirelen)
		if x >= 94:
			if secret_index < len(secret_in_chunks):
				pkts[x].tos = int(secret_in_chunks[secret_index],2)
				secret_index += 1


	index = 0
	for pkt in pkts:
		pkt.wirelen = wire_len[index]
		index += 1
		wrpcap('new_file.pcap', pkt, append=True)

def extract():
	string = ''
	pkts = rdpcap('new_file.pcap')
	for x in range(len(pkts)):
		print(pkts[x].tos)
		#string += chr(pkts[x].tos)
	#print(string)

def main(argv=None):
	#secret_message = "flag{ flag hidden in ToS field }"
	#inject_one_flow(secret_message)
	extract()
	return 0

if __name__ == '__main__':
    status = main()
    sys.exit(status)