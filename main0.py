from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import time

# https://sites.google.com/chromium.org/driver/

service = Service(executable_path="./chromedriver.exe")
driver = webdriver.Chrome(service=service)

# driver.get("https://google.com")
driver.get("https://techaxis.com.np/course/devops-training-in-nepal")

time.sleep(10)

driver.quit()