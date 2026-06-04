import os
import struct
import zlib

def read_png_metadata(filepath):
    """Read metadata text chunks from a PNG file."""
    metadata = {}
    with open(filepath, 'rb') as f:
        # Verify signature
        sig = f.read(8)
        if sig != b'\x89PNG\r\n\x1a\n':
            return None
        
        while True:
            chunk_len_bytes = f.read(4)
            if not chunk_len_bytes or len(chunk_len_bytes) < 4:
                break
            chunk_len = struct.unpack('>I', chunk_len_bytes)[0]
            chunk_type = f.read(4)
            
            if chunk_type == b'IEND':
                break
            
            chunk_data = f.read(chunk_len)
            f.read(4) # CRC
            
            if chunk_type in (b'tEXt', b'zTXt', b'iTXt'):
                try:
                    if chunk_type == b'tEXt':
                        parts = chunk_data.split(b'\x00', 1)
                        if len(parts) == 2:
                            key = parts[0].decode('utf-8', errors='ignore')
                            val = parts[1].decode('utf-8', errors='ignore')
                            metadata[key] = val
                    elif chunk_type == b'zTXt':
                        parts = chunk_data.split(b'\x00', 2)
                        if len(parts) >= 2:
                            key = parts[0].decode('utf-8', errors='ignore')
                            # parts[1] is compression method (usually 0)
                            comp_val = parts[1][1:] # skip compression method byte
                            val = zlib.decompress(comp_val).decode('utf-8', errors='ignore')
                            metadata[key] = val
                except Exception as e:
                    pass
    return metadata

img_dir = 'public/images'
for filename in sorted(os.listdir(img_dir)):
    if filename.endswith('.png'):
        path = os.path.join(img_dir, filename)
        meta = read_png_metadata(path)
        print(f"File: {filename}")
        if meta:
            for k, v in meta.items():
                print(f"  {k}: {v[:200]}")
        else:
            print("  No text metadata found")
