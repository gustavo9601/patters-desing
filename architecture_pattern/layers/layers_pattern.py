class PresentationLayer:
    def __init__(self):
        self.name = "PresentationLayer"

    def setLowerLayer(self, lowerLayer):
        self.lowerLayer = lowerLayer

    def servicio_capa_3(self, param):
        print(f"Entro al servicio s3 - {self.name} - param: {param}")
        self.lowerLayer.s2(param)
        print("termino servicio s3")


class LogicLayer:
    def __init__(self):
        self.name = "LogicLayer"

    def setLowerLayer(self, lowerLayer):
        self.lowerLayer = lowerLayer

    def s2(self, param):
        print(f"Entro al servicio s2 - {self.name} - param: {param}")
        self.lowerLayer.s1(param)
        print("termino servicio s2")


class DataLayer:
    def __init__(self):
        self.name = "DataLayer"

    def s1(self, param):
        print(f"Entro al servicio s1 - {self.name} - param: {param}")


if __name__ == '__main__':
    user_interface = PresentationLayer()
    data = DataLayer()
    logic = LogicLayer()

    user_interface.setLowerLayer(logic)
    logic.setLowerLayer(data)

    user_interface.servicio_capa_3('Param example')