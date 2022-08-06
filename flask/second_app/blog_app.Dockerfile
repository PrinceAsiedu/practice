FROM python:3.10.5
# Set the working directory to /app
WORKDIR /second_app
# Copy local contents into the container 
ADD . /second_app/
# Install all required dependencies 
RUN pip install -r requirements.txt
EXPOSE 5000
CMD ["python", "main.py"]